import { useState } from 'react'

const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => setAnchorEl(null)

  return {
    anchorEl,
    setAnchorEl,
    open,
    handleClose,
  }
}

export default useMenu
