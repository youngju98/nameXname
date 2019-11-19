import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import AssignmentIcon from '@material-ui/icons/Assignment';
import SparcsIcon from '@material-ui/icons/FlashOn';
import StarsIcon from '@material-ui/icons/Stars';
import MusicIcon from '@material-ui/icons/MusicVideo';
import CustomIcon from '@material-ui/icons/AccountCircle';
import RankIcon from '@material-ui/icons/Equalizer';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SparcsIcon />
      </ListItemIcon>
      <ListItemText primary="Sparcs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarsIcon />
      </ListItemIcon>
      <ListItemText primary="Stars" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MusicIcon />
      </ListItemIcon>
      <ListItemText primary="Music Stars" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CustomIcon />
      </ListItemIcon>
      <ListItemText primary="Customs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RankIcon />
      </ListItemIcon>
      <ListItemText primary="Ranking" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="note 1" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="note 2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="note 3" />
    </ListItem>
  </div>
);