import { renderWithProviders } from './render.util';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import React from 'react';
import MyForm from '../src/components/form/form';

export const setupMyForm = async () => {

    const renderForm = () => {
        renderWithProviders(
            <MyForm actionName='AnAction'/>
        )
    }

    const changeCategorySelect = async (category: string[]) => {
        await userEvent.selectOptions(screen.getByTestId('category'), category);
    }

    return {
        renderForm,
        changeCategorySelect,
    }
}
