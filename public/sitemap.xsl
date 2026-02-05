<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>HRandME - XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 40px 20px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%);
            color: white;
            padding: 40px;
            text-align: center;
          }
          .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
          }
          .header p {
            font-size: 1.1rem;
            opacity: 0.9;
          }
          .stats {
            display: flex;
            justify-content: space-around;
            padding: 30px;
            background: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
          }
          .stat {
            text-align: center;
          }
          .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: #0ea5e9;
            display: block;
          }
          .stat-label {
            font-size: 0.875rem;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 5px;
          }
          .content {
            padding: 40px;
          }
          .intro {
            background: #eff6ff;
            border-left: 4px solid #0ea5e9;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 8px;
          }
          .intro h2 {
            color: #1e293b;
            margin-bottom: 10px;
            font-size: 1.25rem;
          }
          .intro p {
            color: #475569;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          thead {
            background: #f1f5f9;
          }
          th {
            padding: 16px;
            text-align: left;
            font-weight: 600;
            color: #1e293b;
            border-bottom: 2px solid #e2e8f0;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          tbody tr {
            border-bottom: 1px solid #e2e8f0;
            transition: background-color 0.2s;
          }
          tbody tr:hover {
            background-color: #f8fafc;
          }
          td {
            padding: 16px;
            color: #475569;
          }
          .url-cell {
            font-weight: 500;
          }
          .url-cell a {
            color: #0ea5e9;
            text-decoration: none;
            transition: color 0.2s;
          }
          .url-cell a:hover {
            color: #0284c7;
            text-decoration: underline;
          }
          .priority-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
          }
          .priority-high {
            background: #dcfce7;
            color: #166534;
          }
          .priority-medium {
            background: #fef3c7;
            color: #92400e;
          }
          .priority-low {
            background: #fee2e2;
            color: #991b1b;
          }
          .changefreq {
            color: #64748b;
            font-size: 0.875rem;
          }
          .footer {
            background: #f8fafc;
            padding: 30px;
            text-align: center;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
          }
          .footer a {
            color: #0ea5e9;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🗺️ HRandME Sitemap</h1>
            <p>Complete list of all pages on our website</p>
          </div>
          
          <div class="stats">
            <div class="stat">
              <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
              <span class="stat-label">Total URLs</span>
            </div>
            <div class="stat">
              <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority &gt;= 0.8])"/></span>
              <span class="stat-label">High Priority</span>
            </div>
            <div class="stat">
              <span class="stat-number"><xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/></span>
              <span class="stat-label">Last Updated</span>
            </div>
          </div>

          <div class="content">
            <div class="intro">
              <h2>📋 About This Sitemap</h2>
              <p>This XML sitemap is used by search engines like Google, Bing, and others to discover and index all pages on our website. Pages are prioritized based on their importance, with our home page and core product pages receiving the highest priority.</p>
            </div>

            <table>
              <thead>
                <tr>
                  <th style="width: 50%">URL</th>
                  <th style="width: 15%">Priority</th>
                  <th style="width: 20%">Change Frequency</th>
                  <th style="width: 15%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="url-cell">
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:priority &gt;= 0.8">
                          <span class="priority-badge priority-high">
                            <xsl:value-of select="sitemap:priority"/>
                          </span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority &gt;= 0.5">
                          <span class="priority-badge priority-medium">
                            <xsl:value-of select="sitemap:priority"/>
                          </span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-badge priority-low">
                            <xsl:value-of select="sitemap:priority"/>
                          </span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="changefreq">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>Generated for <a href="https://hrandme.com">HRandME</a> - AI-Guided HCM for Small HR Teams</p>
            <p style="margin-top: 10px; font-size: 0.875rem;">Learn more about <a href="https://www.sitemaps.org/" target="_blank">XML Sitemaps</a></p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
