import Row from './Row';
import Cell from './Cell';
import Footer from './Footer';
import _ from 'lodash';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.matrix = [];
        
        for (let r= 0; r < this.props.rows; r++){
            let row = [];
            for (let c= 0; c < this.props.rows; c++){
                row.push(`${r}${c}`);
            }
            this.matrix.push(row);
        }
        
        let flatMatrix = _.flatten(this.matrix);
        this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);
        this.state = { 
            gameState: 'ready',
            wrongGuesses: [],
            correctGuesses: []
        }
    }
    componentDidMount(){
        setTimeout(() => this.setState({
            gameState: 'memorize'
        }, () => {
            setTimeout(() => {
                this.setState({
                    gameState: 'recall'
                })
            }, 2000);
        }), 2000);
    }
    render(){
        return (
            <div className="grid">
                {this.matrix.map((row, ri) => (
                    <Row key={ri}>
                        {row.map(cellId => <Cell key={cellId} id={cellId} activeCells={this.activeCells} recordGuesses={this.recordGuesses.bind(this)} {...this.state} />)}
                    </Row>
                ))}
                <Footer {...this.state}/>
            </div>
        );
    }

    recordGuesses({ cellId, isCorrect }){
        let {wrongGuesses, correctGuesses} = this.state;
        if(isCorrect){
            correctGuesses.push(cellId)
        }else{
            wrongGuesses.push(cellId);
        }

        this.setState([
            correctGuesses,
            wrongGuesses
        ])
    }
}

export default Game;