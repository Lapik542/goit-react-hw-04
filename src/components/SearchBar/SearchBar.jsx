import { Form, Formik, Field, ErrorMessage } from 'formik'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
   return (
      <header className={css.headerBar}>
         <Formik
            initialValues={{ query: '' }}
            onSubmit={(values, actions) => {
               if (!values.query.trim()) {
                  toast.error('Поле пошуку не може бути порожнім!');
               } else {
                  onSearch(values.query);
                  actions.resetForm();
               }
            }}
         >
            <Form className={css.formBar}>
               <div>
                  <Field className={css.inputBar} name='query' />
                  <button className={css.btnBar} type='submit'>Search</button>
               </div>
               <ErrorMessage name="query" component="div" className={css.error} />
            </Form>
         </Formik>
      </header>
   );
};
