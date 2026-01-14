function UserInput({ onChange, userInput }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initial">Initial Investment</label>
                    <input type="number" name="initial" id="" className="" required value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)} />
                    <label htmlFor="annual">Annual Investment</label>
                    <input type="number" name="annual" id="" required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </div>
                <div>
                    <label htmlFor="expected">Expected Return</label>
                    <input type="number" name="expected" id="" required value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} />
                    <label htmlFor="duration">Duration</label>
                    <input type="number" name="duration" id="" required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} />
                </div>
            </div>
        </section>
    )
}

export default UserInput
