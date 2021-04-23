import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: "50px 0 "
  },
  paper: {
    padding: theme.spacing(5),
  },
  title: {
      textAlign: "center",
      textTransform: "upperCase",
      fontWeight: '700'
  },
  logo: {
      display:'flex',
      justifyContent:'center',
      margin: '20px 0'
  },
  image: {
      width: '70%',
  },
  tag: {
    margin: '20px 0'
  },
  message:{
    margin: '20px 0'
  },
  name: {
    margin: '20px 0'
  },
  icon: {
    marginRight: '5px'
  }

}));

export default useStyles;
