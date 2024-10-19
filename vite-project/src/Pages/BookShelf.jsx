import React, { useContext, useState, useMemo } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import Box from '@mui/material/Box';
import TableSortLabel from '@mui/material/TableSortLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AllData from '../Context/Context'; // Assuming context is being exported correctly

function BookShelf() {
  const { BookData } = useContext(AllData); // Book data from context
  const [search, setSearch] = useState(''); // Search state
  const [order, setOrder] = useState('asc'); // Sorting order
  const [orderBy, setOrderBy] = useState('title'); // Sorting by field
  const [selected, setSelected] = useState([]); // Selected rows
  const [page, setPage] = useState(0); // Pagination
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page
  const [dense, setDense] = useState(false); // Dense padding switch

  // Filter and sort books based on the search term and sorting options
  const filteredBooks = useMemo(() => {
    return [...BookData]
      .filter((book) => {
        if (!search) return true;
        return (
          book.Title.toLowerCase().includes(search.toLowerCase()) ||
          book.Author.toLowerCase().includes(search.toLowerCase()) ||
          book.Genre.toLowerCase().includes(search.toLowerCase()) ||
          book.YearOfPublication.toString().includes(search.toLowerCase())
        );
      })
      .sort((a, b) => {
        if (orderBy === 'title') {
          return order === 'asc'
            ? a.Title.localeCompare(b.Title)
            : b.Title.localeCompare(a.Title);
        }
        return 0; // Add other sorting criteria if needed
      });
  }, [BookData, search, order, orderBy]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = filteredBooks.map((book) => book.Title);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (bookTitle) => {
    const selectedIndex = selected.indexOf(bookTitle);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, bookTitle);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (bookTitle) => selected.indexOf(bookTitle) !== -1;

  return (
    <div>
      
      {/* Heading */}
      <Typography
        sx={{
          marginTop: '1rem',
          width: 'auto',
          textAlign: 'center',
          fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2rem', lg: '2rem' },
        }}
        component="h4"
      >
        Search Book Form
      </Typography>

      {/* Search Input */}
      <Paper
        component="form"
        sx={{ display: 'flex', alignItems: 'center', width: 'auto' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Library Book Forms"
          onChange={(event) => setSearch(event.target.value)}
          inputProps={{ 'aria-label': 'Search Library Book Forms' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Table */}
      <Box sx={{ width: '100%', mt: 2 }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} size={dense ? 'small' : 'medium'}>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      onChange={handleSelectAllClick}
                      inputProps={{ 'aria-label': 'select all books' }}
                    />
                  </TableCell>
                  <TableCell sortDirection={orderBy === 'title' ? order : false}>
                    <TableSortLabel
                      active={orderBy === 'title'}
                      direction={orderBy === 'title' ? order : 'asc'}
                      onClick={() => handleRequestSort('title')}
                    >
                      Title
                      {orderBy === 'title' ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="right">Author</TableCell>
                  <TableCell align="right">Genre</TableCell>
                  <TableCell align="right">Year of Publication</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredBooks
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((book, index) => {
                    const isItemSelected = isSelected(book.Title);
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={`${book.Title}-${index}`}
                        selected={isItemSelected}
                        onClick={() => handleClick(book.Title)}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': `enhanced-table-checkbox-${index}`,
                            }}
                          />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          {book.Title}
                        </TableCell>
                        <TableCell align="right">{book.Author}</TableCell>
                        <TableCell align="right">{book.Genre}</TableCell>
                        <TableCell align="right">{book.YearOfPublication}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredBooks.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

        {/* Dense Padding Switch */}
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </div>
  );
}

export default BookShelf;
