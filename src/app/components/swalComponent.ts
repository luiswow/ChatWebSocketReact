import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

interface IToastComponent {
    message: string
}
const MySwal = withReactContent(Swal)

export const toastComponent = ({ message }: IToastComponent) => {
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
export const modalComponent:any = (action:any)=>{
  return   MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
}