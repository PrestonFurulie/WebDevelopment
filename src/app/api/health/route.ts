import { NextResponse } from 'next/server';

/**
 * FLLC Health Check API
 * Returns system status, uptime, and environment info.
 */
export async function GET() {
    const uptime = process.uptime();
    const memUsage = process.memoryUsage();

    return NextResponse.json({
        status: 'operational',
        timestamp: new Date().toISOString(),
        version: '3.2.0',
        environment: process.env.NODE_ENV || 'development',
        uptime: {
            seconds: Math.floor(uptime),
            formatted: formatUptime(uptime),
        },
        memory: {
            heapUsed: formatBytes(memUsage.heapUsed),
            heapTotal: formatBytes(memUsage.heapTotal),
            rss: formatBytes(memUsage.rss),
        },
        node: process.version,
        platform: process.platform,
    });
}

function formatUptime(seconds: number): string {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${days}d ${hours}h ${mins}m`;
}

function formatBytes(bytes: number): string {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)}MB`;
}
