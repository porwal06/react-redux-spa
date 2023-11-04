import { redirect } from "react-router-dom";
import EventForm from "./EventForm";


function EventNewPage() {
    return <EventForm/>

}
export const addEventAction = async({request, params}) => {
    
    const data = await request.formData();
    const eventData = {
        name: data.get('name'),
        id: data.get('id'),
        desc: data.get('desc'),
    }
    const response = await fetch('https://react-course-578e5-default-rtdb.firebaseio.com/event.json', {
            method: 'post',
            body: JSON.stringify(eventData),
        });
    if(!response.ok) {
        throw new Error("Couldn't add event");
    }
    
    return redirect('/events');

}
export default EventNewPage;