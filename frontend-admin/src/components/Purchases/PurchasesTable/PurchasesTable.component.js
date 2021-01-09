import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import DeleteOutlineIcon from '@material-ui/icons/Visibility'
import SettingsIcon from '@material-ui/icons/Settings'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert' // Import
import Background from './img/back.jpg'

//Hover Component For Delete Icon
const HoverDeleteButton = styled.p`
	color: #ffffff;
	:hover {
		color: green;
		cursor: pointer;
	}
`

const columns = [
	{
		id: 'ItemCode',
		label: 'Item Code',
		minWidth: 80,
		align: 'center',
	},

	{
		id: 'UserName',
		label: 'User ID',
		minWidth: 100,
		align: 'center',
	},

	{
		id: 'date',
		label: 'Date',
		minWidth: 50,
		align: 'center',
	},

	{
		id: 'ViewPurchase',
		label: 'View',
		minWidth: 30,
		align: 'center',
	},
]

function createData(ItemCode, UserName, date, ViewPurchase) {
	return {
		ItemCode,
		UserName,
		date,
		ViewPurchase,
	}
}

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 550,
		borderRadius: '20px',
	},
	TableBody: {
		background: 'linear-gradient(45deg, #ededed 30%, #fcfcfc 90%)',
		borderRadius: '20px',
		backgroundImage: `url(${Background})`,
		backgroundRepeat: 'no-repeat' /* Do not repeat the image */,
		backgroundSize: 'cover',
		backgroundOpacity: 0.5,
	},
})

export default function PurchasesTable() {
	const classes = useStyles()
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(10)
	const [PurchasesList, setPurchasesList] = useState([])
	let users = ''
	let userName = ''
	//fetching meallist data from the backend
	useEffect(() => {
		const config = {
			headers: {
				'x-auth-token': localStorage.getItem('x-auth-token'),
			},
		}

		axios
			.get('/purchase/', config)
			.then(({ data }) => {
				if (data.length > 0) {
					setPurchasesList(data)
				}
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	//map table row data
	const rows = PurchasesList.map(purchase => {
		return createData(
			purchase.Items,
			purchase.UserId,
			purchase.date,
			purchase._id
		)
	})

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

	return (
		<>
			<Paper
				className={classes.root}
				style={{
					borderRadius: '20px',
					boxShadow: '10px 5px 10px rgba(110, 107, 107, 0.548)',
				}}
				boxShadow={3}
			>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label='sticky table'>
						<TableHead>
							<TableRow>
								{columns.map(column => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{
											minWidth: column.minWidth,
											color: 'white',
											backgroundColor: '#085782',
										}}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody className={classes.TableBody}>
							{rows
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map(row => {
									return (
										<TableRow
											hover
											role='checkbox'
											tabIndex={-1}
											key={row.code}
										>
											{columns.map(column => {
												const value = row[column.id]
												return (
													<TableCell
														style={{ color: 'white' }}
														key={column.id}
														align={column.align}
													>
														{column.format && typeof value === 'number' ? (
															column.format(value)
														) : column.id === 'ViewPurchase' ? (
															<Link
																to={{
																	pathname: '/ViewPurchases',
																	data: value,
																}}
															>
																<HoverDeleteButton>
																	<DeleteOutlineIcon />
																</HoverDeleteButton>
															</Link>
														) : (
															value
														)}
													</TableCell>
												)
											})}
										</TableRow>
									)
								})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component='div'
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>

			<br />
		</>
	)
}
