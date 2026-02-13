/**
 * FLLC Database Connection Utilities
 * AWS DynamoDB + PostgreSQL (RDS) connection helpers
 */

// DynamoDB configuration
export const dynamoConfig = {
  region: process.env.AWS_REGION || 'us-west-2',
  tableName: process.env.DYNAMO_TABLE || 'fllc-intelligence',
  endpoint: process.env.DYNAMO_ENDPOINT, // local dev override
};

// RDS PostgreSQL configuration
export const rdsConfig = {
  host: process.env.RDS_HOST || 'localhost',
  port: parseInt(process.env.RDS_PORT || '5432'),
  database: process.env.RDS_DATABASE || 'fllc_analytics',
  user: process.env.RDS_USER || 'fllc_app',
  password: process.env.RDS_PASSWORD,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
};

// Redis cache configuration
export const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  tls: process.env.NODE_ENV === 'production' ? {} : undefined,
  db: 0,
  keyPrefix: 'fllc:',
  maxRetriesPerRequest: 3,
};

/**
 * Query builder for threat intelligence lookups
 */
export function buildThreatQuery(params: {
  type?: string;
  severity?: string;
  since?: Date;
  limit?: number;
}) {
  const conditions: string[] = [];
  const values: unknown[] = [];
  let idx = 1;

  if (params.type) {
    conditions.push(`threat_type = $${idx++}`);
    values.push(params.type);
  }
  if (params.severity) {
    conditions.push(`severity >= $${idx++}`);
    values.push(params.severity);
  }
  if (params.since) {
    conditions.push(`detected_at >= $${idx++}`);
    values.push(params.since.toISOString());
  }

  const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const limit = params.limit ? `LIMIT ${params.limit}` : 'LIMIT 100';

  return {
    text: `SELECT * FROM threat_events ${where} ORDER BY detected_at DESC ${limit}`,
    values,
  };
}

/**
 * Query builder for compliance audit results
 */
export function buildComplianceQuery(framework: string) {
  return {
    text: `
      SELECT 
        control_id,
        control_name,
        status,
        last_checked,
        evidence_ref
      FROM compliance_controls 
      WHERE framework = $1 
      ORDER BY control_id
    `,
    values: [framework],
  };
}
