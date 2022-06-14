import { setupMyForm } from '../../../test/setup-form';

test('should submit form', async () => {

    const {
        renderForm,
        changeCategorySelect,
    } = await setupMyForm();

    renderForm();
    await changeCategorySelect(['2', 'Accommodation']);
});
