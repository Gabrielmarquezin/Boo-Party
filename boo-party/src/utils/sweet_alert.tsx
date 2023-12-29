import Swal from "sweetalert2"

export const SwalAlert = (message: string, success: boolean) => {
    Swal.fire({
        icon: success ? "success" : "error",
        title: success ? "Showw!!" : "Ishe!",
        text: message
    });
}