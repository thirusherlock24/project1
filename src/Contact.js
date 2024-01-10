import React from 'react';
import { Field, Form, Formik } from 'formik';

import './Contacts.css'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Select,
  
} from '@chakra-ui/react'
function Contact() {
  
  function validateEmail(email)
  {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);
    if (isValid) {
      return undefined;
    } else {
      return 'invalid email';
        }
  }
  function validateComment(value) {
    if (!value) {
      return 'message is required';
    }
    return undefined; 
  }
    return (
      <div className="container">
        <div className="form-container">
      <Formik
      initialValues={{ name: '', comment: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert('all good');
          actions.setSubmitting(false);
        }, 1000);
      }}
    >{(props) => (
      <Form>
      <Field name='name'>
      {({ field, form }) => (
    
      <FormControl isRequired>
      <FormLabel>First name</FormLabel>
      <Input {...field} placeholder='name' />
      </FormControl>
      )}
      </Field>

      <Field name='email' validate={validateEmail}>
      {({ field, form }) => (
     
      <FormControl isInvalid={form.errors.email && form.touched.email} isRequired>
        <FormLabel>Email</FormLabel>
        <Input {...field} placeholder='enter email' />
        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
      </FormControl>
      )}
      </Field>
      <Field name='reason'>
      {({ field}) => (
      <FormControl>
      <FormLabel>Reason to contact</FormLabel>
       <Select {...field} >
       <option value="project">project</option>
         <option value="others">others</option>
        </Select>
      </FormControl>
      )}
      </Field>
      <Field name='comment' validate={validateComment}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.comment && form.touched.comment}>
              <FormLabel>Your message</FormLabel>
              <Textarea {...field} placeholder='message' />
              <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
          </Form>
      )}
    </Formik>
    </div>
    </div>
    )
  
}

export default Contact;
