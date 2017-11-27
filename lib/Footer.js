class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="hint">
                    {this.props.hints[this.props.gameState]}
                </div>
                {this.remainingCount()}
                {this.playAgain()}
            </div>
        );
    }
    remainingCount(){
        if(this.props.gameState !== 'recall'){
            return null;
        }

        return (
            <div className="remaining-count">
                {this.props.activeCellsCount - this.props.correctGuesses.length}
            </div>
        )
    }
    playAgain(){
        if(this.props.gameState === 'won' || this.props.gameState === 'lost'){
            return (
                <div className="play-again">
                    <button onClick={this.props.playAgain}>Play Again!</button>
                </div>
            )
        }

        return null;
    }
}

Footer.defaultProps = {
    hints: {
        ready: "Get Ready",
        memorize: 'Memorize',
        recall: "Recall",
        won: "Well Played",
        lost: "Game Over"
    }
}
export default Footer;