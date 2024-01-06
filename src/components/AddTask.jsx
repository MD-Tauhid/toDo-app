import React from 'react';

const AddTask = () => {
    return (
        <div>
            <div className="form-container">
                <form className="form">
                    <div className="form-group">
                        <label for="email">Company Email</label>
                        <input required="" name="email" id="email" type="text"/>
                    </div>
                    <div className="form-group">
                        <label for="textarea">How Can We Help You?</label>
                        <textarea required="" cols="50" rows="10" id="textarea" name="textarea">
                            
                        </textarea>
                    </div>
                    <button type="submit" className="form-submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;