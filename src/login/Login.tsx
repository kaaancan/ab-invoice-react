import React, {memo, useCallback} from "react";
import {Center, TextInput, Button, Group, PasswordInput} from '@mantine/core'


import './Login.css';
import {useForm} from "@mantine/form";


interface FormInput {
    username: string;
    password: string;
}

export const Login = memo(function Login(): React.ReactElement {


    const form = useForm<FormInput>({
        initialValues: {
            username: '',
            password: '',
        },
        validate: {
            username: (value) => (value.length === 0 ? 'Please input name' : null),
            password: (value) => (value.length === 0 ? 'Please input password' : null),
        }
    })

    const tryLogin = useCallback((values: FormInput) => {
        console.log(values);
    }, [])

    return  <Center style={{height: 800}}>
        <form onSubmit={form.onSubmit((values) => tryLogin(values))} >
            <TextInput label="Username" placeholder="Username" {...form.getInputProps('username')} />
            <PasswordInput
                label="Password"
                placeholder="Password"
                {...form.getInputProps('password')}
            />
            <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    </Center>
})