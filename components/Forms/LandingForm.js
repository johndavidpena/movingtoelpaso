import FormStyles from './Form.module.css';
import { useFormik } from 'formik';
import axios from 'axios/index';
import * as gtag from '../../utils/gtag';
// import UserInterest from '../Forms/UserInterest';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 25) {
    errors.firstName = 'Must be 25 characters or less';
  }

  // if (!values.lastName) {
  //   errors.lastName = 'Required';
  // } else if (values.lastName.length > 20) {
  //   errors.lastName = 'Must be 20 characters or less';
  // }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.note.length > 150) {
    errors.note = 'Must be 150 characters or less';
  }

  return errors;
};

const LandingForm = ({ showForm, setShowForm }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      // lastName: '',
      email: '',
      // phone: '',
      note: ''
    },
    validate,
    onSubmit: async (values) => {
      const res = await axios.post('/api/LandingContacts', { values: values })
        .then(() => {
          setShowForm(false);
        })
        .then(() => {
          const twilioAlert = axios.post('/api/twilioAlert', { values: values });
        })
        .then(() => {
          gtag.event({
            action: 'submit_form',
            category: 'Landing',
            label: 'LandingForm',
            value: 'Submit'
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={FormStyles.form}>
      {formik.touched.firstName && formik.errors.firstName ? (
        <div><p>{formik.errors.firstName}</p></div>
      ) : null}
      <input
        className={FormStyles.input}
        id="firstName"
        name="firstName"
        // placeholder="First name"
        placeholder="Name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {/* {formik.touched.lastName && formik.errors.lastName ? (
        <div><p>{formik.errors.lastName}</p></div>
      ) : null}
      <input
        className={FormStyles.input}
        id="lastName"
        name="lastName"
        placeholder="Last name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      /> */}
      {formik.touched.email && formik.errors.email ? (
        <div><p>{formik.errors.email}</p></div>
      ) : null}
      <input
        className={FormStyles.input}
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {/* <input
        className={FormStyles.input}
        id="phone"
        name="phone"
        placeholder="Phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      /> */}
      {formik.errors.note ? (
        <div><p>{formik.errors.note}</p></div>
      ) : null}
      <textarea
        className={FormStyles.input}
        id="note"
        name="note"
        placeholder="Message"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.note}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LandingForm;
