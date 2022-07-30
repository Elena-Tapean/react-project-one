import { PreviewCards } from '../components/PreviewCards';
import './css/port-folio.scss';

export const Portfolio = function () {
    return (
        <div className="port-folio">
            <h1>My projects so far</h1>
            <section>
                <ul>
                    <li>
                        <PreviewCards />
                    </li>
                </ul>
            </section>
        </div>
    )
}