import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import React, { FC, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

// FIXME: fix typing here
const buildProviders = (routerOptions: { initialRoute: string } | undefined): FC<{ children: any }> => {
    const initialRoute = routerOptions?.initialRoute ?? '/';

    // FIXME: fix typing here
    return ({children}) => {
        return (
            <MemoryRouter initialEntries={[initialRoute]}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </MemoryRouter>
        )
    }
}

const renderWithProviders = (ui: ReactElement, routerOptions?: { initialRoute: string }, renderOptions?: Omit<RenderOptions, 'wrapper'>) => {
    return {
        user: userEvent.setup(),
        ...render(ui, {wrapper: buildProviders(routerOptions), ...renderOptions}),
    }
}

export {renderWithProviders};
