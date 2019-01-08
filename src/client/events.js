import axios from 'axios';

export default () => {
  document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();
    const submitHtml = document.querySelector('#submit').innerHTML;
    document.querySelector('#submit').innerHTML =
      '<i class="fa fa-spinner fa-spin"></i> Enviando...';
    const data = {
      name: document.querySelector('[name=name]').value,
      from: document.querySelector('[name=from]').value,
      phone: document.querySelector('[name=phone]').value,
      msg: document.querySelector('[name=msg]').value,
    };

    if (!data.msg) {
      setError('Nenhuma mensagem foi escrita');
      return;
    }
    if (!data.from) {
      setError('É preciso fornecer um email');
      return;
    }

    axios
      .post('/api/send_email', data)
      .then(res => {
        if (!res.data.err) {
          document.querySelector(
            '#form-msg'
          ).innerHTML = `<div class="destaque sucesso">
                    Email enviado com sucesso! <i class="fa fa-thumbs-o-up"></i>
                 </div>`;
          document.querySelector('#submit').innerHTML = submitHtml;
        } else {
          setError(res.data.err);
        }
      })
      .catch(err => {
        setError(err);
      });

    function setError(errorMsg) {
      document.querySelector(
        '#form-msg'
      ).innerHTML = `<div class="destaque erro">
            ${errorMsg} <i class="fa fa-thumbs-o-down"></i>
           </div>`;
      document.querySelector('#submit').innerHTML = submitHtml;
    }
  });
};
