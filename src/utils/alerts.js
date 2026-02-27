import Swal from "sweetalert2";

export const showError = (message = "Hubo un error") => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
    confirmButtonColor: "#d32f2f",
  });
};

export const showSuccess = (message) => {
  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: message,
    timer: 2000,
    showConfirmButton: false,
  });
};
