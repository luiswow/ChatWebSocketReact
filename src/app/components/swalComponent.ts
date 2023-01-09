import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

interface IToastComponent {
    message: string
}

export const toastComponent = ({ message }: IToastComponent) => {
    const MySwal = withReactContent(Swal)
    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', MySwal.stopTimer)
            toast.addEventListener('mouseleave', MySwal.resumeTimer)
        },
    })

    Toast.fire({
        icon: 'success',
        title: `${message}`,
    })
}
