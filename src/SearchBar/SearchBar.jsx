import { Form, Formik, Field } from 'formik';
import css from './SearchBar.module.css'

export const SearchBar = ({onSearch}) => {
   return (
      <header className={css.headerBar}>
         <Formik initialValues={{query: ''}} onSubmit={(values, actions) => {
            console.log(values);
            onSearch(values.query);
            actions.resetForm();
         }}>
            <Form>
               <Field name='query' />
            </Form>
            <button type='submit'>Search</button>
         </Formik>
      </header>
   );
}
