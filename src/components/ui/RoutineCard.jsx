import React from "react";
import { Button, Menu, MenuItem } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';

export const RoutineCard = ({ name, exercises, handleDelete, onClickCard }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const exercisesStr = exercises.map(({ exerciseDetails: { name } }) => name).join(', ')

  return (
    <div style={{ position: 'relative' }}>
      <div className="routine-card" onClick={onClickCard}>
        <div>
          <p className="routine-card-title">{name}</p>
          <span className="routine-card-exercises">{exercisesStr}</span>
        </div>

      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <Button
        sx={{ position: 'absolute', right: 10, top: '25%' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SettingsIcon sx={{ fill: '#ffff' }} />
      </Button>
    </div>
  )
}
