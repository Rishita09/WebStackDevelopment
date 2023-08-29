<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>HRD | Company</title>
                <style>
                    h1{text-align:center;}
                    table{width:100%;}
                    table,th,td{border:1px solid black;border-collapse:collapse;text-align:left;}
                    th{text-align:center;}
                </style>
            </head>
            <body>
                <h1>The Human Resource Department</h1>
                <p>Employee details for company:</p>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Mail</th>
                        <th>Phone</th>
                    </tr>
                    <xsl:for-each select="employees/employee">
                        <tr>
                            <td>
                                <xsl:value-of select="./employment/id"> xsl</xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="./personal/name/first"></xsl:value-of>&#160;<xsl:value-of
                                    select="./personal/name/last"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="./personal/dob"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="./personal/gender"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="./employment/position"></xsl:value-of>
                            </td>
                            <td>&#36;<xsl:value-of select="./employment/salary"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="./contact/email"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="./contact/phone"></xsl:value-of>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
