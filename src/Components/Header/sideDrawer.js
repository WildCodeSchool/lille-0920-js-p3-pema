import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("featured")}>
          Home
        </ListItem>
        <ListItem button onClick={() => console.log("Venue")}>
          Notre Approche
        </ListItem>
        <ListItem button onClick={() => console.log("Highlights")}>
          Discutons de vos besoins
        </ListItem>
        <ListItem button onClick={() => console.log("Pricing")}>
          Témoignage
        </ListItem>
        <ListItem button onClick={() => console.log("Location")}>
          Donner un sens
        </ListItem>
        <ListItem button onClick={() => console.log("Location")}>
          Les 4 leviers d'une entreprise épanouïe
        </ListItem>
        <ListItem button onClick={() => console.log("Location")}>
          Le plaisir et la fierté de diriger
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
