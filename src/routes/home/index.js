import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import SignIn from '../../components/SignIn';
import { auth, googleAuthProvider } from '../../components/firebase';

export default class Home extends Component {

	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged(currentUser => {
			this.setState({ currentUser });
		});
	}


	render({ }, { currentUser }) {
		return (
			<div class={style.home}>

				<h1>Home route</h1>
				<Card>
					<Card.Primary>
						<Card.Title>Home card</Card.Title>
						<Card.Subtitle>Welcome to home route</Card.Subtitle>
					</Card.Primary>
					<Card.SupportingText>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>OKAY</Card.Action>
					</Card.Actions>
				</Card>
				<Card>
					{!currentUser && <SignIn />}
					{currentUser &&
						<div class={style.flex}>
							<NewExercise user={currentUser} />
							<CurrentUser user={currentUser} />
						</div>}
				</Card>
			</div>
		);
	}
}
