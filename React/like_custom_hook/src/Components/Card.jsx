import React from "react"
import { makeStyles } from "@material-ui/core/styles"
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
import MoreVertIcon from "@material-ui/icons/MoreVert"

import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined"

import useLike from "./useLike"
import useCount from "./useCount"
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

export default function RecipeReviewCard() {
	const classes = useStyles()

	const { like, handleLike, unlike, handleUnlike } = useLike()

	//   const [expanded, setExpanded] = React.useState(false);

	//   const handleExpandClick = () => {
	//     setExpanded(!expanded);
	//   };

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>
			<CardMedia className={classes.media} image="https://picsum.photos/200/300" title="Paella dish" />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton onClick={handleLike} aria-label="add to favorites">
					<ThumbUpIcon color={like ? "primary" : ""} />
				</IconButton>
				<IconButton onClick={handleUnlike} aria-label="share">
					<ThumbDownIcon color={unlike ? "primary" : ""} />
				</IconButton>
			</CardActions>
		</Card>
	)
}
