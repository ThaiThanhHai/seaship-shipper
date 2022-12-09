import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

export default function ModalSuccess({ open, setOpen, id }) {

  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const handleUpdateStatus = async (id, status) => {
    try {
      const result = await axios.put(
        `http://localhost:3000/api/v1/deliveries/order/${id}`,
        status
      );
      if (result.data) {
        toast.success("Cập nhật đơn hàng thành công");
        setOpen(false)
        navigate("/order");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra vui lòng thử lại");
      console.error(error);
    }
  };

const handleConfirm = () => {
  console.log(id)
  handleUpdateStatus(id, { status: "finished" });
}

const handleCancel = () => {
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Typography id="modal-modal-description" sx={{ mb: 4, mt: 2 }}>Xác nhận đơn hàng đã giao thành công</Typography>
            <Button sx={{ float: "right" }} onClick={handleConfirm}>Xác nhận</Button>
            <Button sx={{ float: "right" }} onClick={handleCancel}>Hủy</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
