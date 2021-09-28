import { Button } from '../Button/Button';
import './Name.css'

export function Name({text}) {
    return (
        <div className="name-component">
            <Button title={text} />
        </div>
    );
}

Name.defaultProps = {
    text: 'Nome',
};