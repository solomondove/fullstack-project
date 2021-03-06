import React from 'react';
import { Link } from 'react-router-dom';


class DashboardWorkoutIndexItem extends React.Component {

    handleDelete() {
        this.props.deleteWorkout(this.props.workout.id);
    }

    workoutIcon() {
        let workoutType = this.props.workout.activity_type;
        switch (workoutType) {
            case "Running":
                return <i className="fas fa-running fa-5x" id="index-icon"></i>
            case "Cycling":
                return <i className="fas fa-biking fa-5x" id="index-icon"></i>
            case "Hiking":
                return <i className="fas fa-hiking fa-5x" id="index-icon"></i>
            case "Yoga":
                return <i className="fas fa-praying-hands fa-5x" id="index-icon"></i>
            case "Strength Training":
                return <i className="fas fa-dumbbell fa-5x" id="index-icon"></i>
            default:
                break;
        }
    }

    routeStats() {
        const { workout, user, route } = this.props;
        if (route === undefined) {
            return (
                <div className="dash-tile-section-content">
                    <div className="dash-stat-section-header">Time:
                        <br />
                        <span className='stat'>{workout.time_elapsed}</span> <span className='denomination'>m</span>
                    </div>
                    <div className="dash-stat-section-header">Date:
                        <br />
                        <span className='stat'>{this.dateInfo()}</span>
                    </div>
                </div>
            )
        } else {
            let routeDistance = route.distance * 0.00062371;
            let workoutPacePerMinute = (workout.time_elapsed / routeDistance).toFixed(2);
            let seconds = (workoutPacePerMinute % 1 * 60).toFixed(0);
            let minutes = Math.floor(workoutPacePerMinute)
            return (
                <div className="dash-tile-section-content">
                    <div className="dash-stat-section-header">Time:
                        <br />
                        <span className='dash-stat'>{workout.time_elapsed}</span><span className='denomination'>m</span>
                    </div>
                    <div className="dash-stat-section-header">Distance:
                        <br />
                        <span className='dash-stat'>{routeDistance.toFixed(2)}</span><span className='denomination'>mi</span>
                    </div>
                    <div className="dash-stat-section-header">Pace:
                        <br />
                        <span className='dash-stat'>{minutes}:{seconds}</span><span className="denomination">/mi</span>
                    </div>
                    <div className="dash-stat-section-header">Date:
                        <br />
                        <span className='stat'>{this.dateInfo()}</span>
                    </div>
                </div>
            )
        }
    }

    dateInfo() {
        let date = new Date(this.props.workout.created_at);
        return (`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
    }

    render() {
        const { workout, user, route } = this.props;
    
        return (
            <div className="dashboard-workout-tile">
                <div className="dash-index-tile-left">
                    {this.workoutIcon()}
                    <Link to={`/workouts/edit/${workout.id}`} ><button className="session-button" id="workout-index-button">Edit Workout</button></Link>
                    <br />
                    <button onClick={this.handleDelete} className="session-button" id="workout-index-button">Delete Workout</button>
                </div>
                <div className="dash-index-tile-right">
                    <h3 className="dash-workout-title">{user.email} went {workout.activity_type.toLowerCase()}
                    </h3>
                    <label className="tile-section-header">Description:
                        <p className='dash-description-content'>{workout.description}</p>
                    </label>
                </div>
                <div>
                    {this.routeStats()}
                </div>
            </div>
        )
    }
}

export default DashboardWorkoutIndexItem; 