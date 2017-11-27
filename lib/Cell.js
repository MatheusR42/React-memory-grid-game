class Cell extends React.Component {
    active() {
        return this.props.activeCells.includes(this.props.id)
    }
    render() {
        let className = 'cell';
        if(this.props.gameState === 'memorize' && this.active())
            className += ' active';

        className += ` guess-${this.guessState()}`
        return (
            <div className={className} onClick={this.handleClick.bind(this)} />
        );
    }
    handleClick(){
        if(this.props.gameState === 'recall'){
            this.props.recordGuesses({
                cellId: this.props.id,
                isCorrect: this.active()
            })
        }
    }
    guessState(){
        if(this.props.correctGuesses.includes(this.props.id)){
            return true;
        }

        if(this.props.wrongGuesses.includes(this.props.id)){
            return false;
        }
    }
}

export default Cell;