import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Alert = {
  delete: async () => {
    return MySwal.fire({
      title: 'Deseja realmente remover?',
      text: 'O registro será removido completamente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SIM, confirmo!',
      cancelButtonText: 'NÃO',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      focusCancel: true,
      reverseButtons: true,
    });
  },
};

export default Alert;
