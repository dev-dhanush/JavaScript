import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleLike, toggleUnlike, addLike, addUnlike, selectCount } from "./counterSlice"
import styles from "./Counter.module.css"

import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
}))

export function RecipeReviewCard() {
	const transparent = "transparent"
	const [username, setUsername] = useState("")

	useEffect(() => {
		setUsername(prompt("what is your name? "))
	}, [])

	const classes = useStyles()
	const { like, dislike, likeCount, dislikeCount } = useSelector(selectCount)
	const dispatch = useDispatch()
	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						DP
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={username ? username : ""}
				subheader={Date.now()}
			/>
			<CardMedia className={classes.media} image="https://picsum.photos/200/300" title="Paella dish" />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					onClick={() => {
						console.log("like",likeCount)
						dispatch(toggleLike())
						dispatch(addLike(username))
					}}
				>
					<ThumbUpIcon color={like ? "primary" : "inherit"} />
				</IconButton>
				<IconButton
					onClick={() => {
						console.log("dislike",dislikeCount)
						dispatch(toggleUnlike())
						dispatch(addUnlike(username))
					}}
					aria-label="share"
				>
					<ThumbDownIcon color={dislike ? "primary" : "inherit"} />
				</IconButton>
			</CardActions>
		</Card>
	)
}

// export function Counter() {
// 	const { like, unlike, likeCount, dislikeCount } = useSelector(selectCount)
// 	const dispatch = useDispatch()
// 	// const [incrementAmount, setIncrementAmount] = useState('2');
// 	// const incrementValue = Number(incrementAmount) || 0;

// 	return (
// 		<div>
// 			<div className={styles.row}>
// 				<button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
// 					-
// 				</button>
// 				<span className={styles.value}>{count}</span>
// 				<button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
// 					+
// 				</button>
// 			</div>
// 			<div className={styles.row}>
// 				<input className={styles.textbox} aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
// 				<button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
// 					Add Amount
// 				</button>
// 				<button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(incrementValue))}>
// 					Add Async
// 				</button>
// 				<button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementValue))}>
// 					Add If Odd
// 				</button>
// 			</div>
// 		</div>
// 	)
// }
