/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@material-ui/core';

export const AdminDashboard = () => {
  const [adminReports, setAdminReports] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/adminReports/`, {
        withCredentials: true,
      })
      .then((res: any) => {
        console.log(res.data);
        setAdminReports(res.data);
      });
  }, []);

  return (
    <>
      <h1>Admin</h1>
      <h2>Recent reports:</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell align='right'>Reporter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminReports.map((report: any) => (
              <TableRow>
                <TableCell component='th' scope='row'>
                  {report.content}
                </TableCell>
                <TableCell align='right'>
                  <a href={`/profile/${report.reporter}`}>{report.reporter}</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
