class Footer extends React.Component {
    render() {
        console.log(this.props)
        console.log(this.props.hints[this.props.gameState]);
        return (
            <div className="footer">
                <div className="hint">
                    {this.props.hints[this.props.gameState]}
                </div>
                {this.remainingCount()}
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