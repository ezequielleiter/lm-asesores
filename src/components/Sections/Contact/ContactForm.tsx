import HCaptcha from '@hcaptcha/react-hcaptcha';
import emailjs from 'emailjs-com';
import {FC, FormEvent, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [verify, setVerify] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendOk, setSendOk] = useState(false);
  const [sendError, setSendError] = useState(false);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSendMessage = (e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    if (!verify) {
      console.log('Debe verificar');
      return;
    }
    setSending(true);
    emailjs.sendForm('service_kyrejdj', 'template_67vbwe7', e.target, 'CQvA3pmQVvEBZXWEO').then(
      () => {
        setSending(false);
        setSendOk(true);
      },
      error => {
        console.log(error.text);
        setSendError(true);
      },
    );
  };

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={e => handleSendMessage(e)}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Nombre" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Mensaje"
        required
        rows={6}
      />
      {sendOk ? (
        <p style={{color: 'white', backgroundColor: 'green', borderRadius: '0.5rem', paddingLeft: '0.5rem'}}>
          Gracias por su mensaje, nos pondremos en contacto a la brevedad{' '}
        </p>
      ) : null}
      {sendError ? (
        <p style={{color: 'white', backgroundColor: 'red', borderRadius: '0.5rem', paddingLeft: '0.5rem'}}>
          Tuvimos un error al enviar le formulario, por favor envianos tu consulta a info@asesoreslm.com.ar
        </p>
      ) : null}
      <button
        aria-label="Enviar formulario"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        disabled={sending}
        type="submit">
        {sending ? 'Enviando...' : 'Enviar'}
      </button>
      <HCaptcha
        sitekey="7b9702c7-cf86-4cbb-af66-a16c0fd3ce24"
        // eslint-disable-next-line react/jsx-sort-props, react-memo/require-usememo
        onVerify={() => setVerify(true)}
      />
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
