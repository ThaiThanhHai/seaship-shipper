import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextareaAutosize } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "65%",
  transform: "translate(-65%, -65%)",
  width: 315,
  bgcolor: "background.paper",
  boxShadow: 20,
  p: 4,
  borderRadius: 4,
};

export default function ModalFailure({ open, setOpen  }) {
  const handleClose = () => setOpen(false);
  const [failureReason, setFailureReason] = React.useState('');

const handleChange = () => (event) => {
  setFailureReason(event.target.value)
}

console.log(failureReason)
const handleClick = () => {
  console.log(failureReason)
  setOpen(false)
}
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Lý do thất bại
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Nhập nguyên nhân đơn hàng thất bại"
              style={{ width: 300, height: 100, padding: 5 }}
              onChange={handleChange()}
            />
            <Button sx={{ float: "right" }} onClick={handleClick}>Xác nhận</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
