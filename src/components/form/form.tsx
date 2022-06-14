import React from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks';

interface Props {
    actionName: string
}

function MyForm({
                    actionName
                }: Props) {

    const {data: categories = [], isLoading} = useCategories();

    console.log('categories: ', categories);
    console.log('isLoading: ', isLoading);


    const handleMyForm = ((someObject: any) => {
        console.log(someObject);
    });

    return (
        <form onSubmit={handleMyForm}>
            <div className="w-[30vh] m-auto p-2">
                <select data-testid="category">
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>))
                    }
                </select>
            </div>
            <div className="pt-3">
                <Link to="/admin/advertisement/list" className="pr-3">
                    <button data-testid="cancel-button">Cancel</button>
                </Link>
                <button onClick={handleMyForm} data-testid="submit-button">{actionName}</button>
            </div>
        </form>
    );
}

export default MyForm;
