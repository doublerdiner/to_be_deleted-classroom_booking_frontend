import { Button} from "react-bootstrap"
import { Modal } from "bootstrap"
import ModalDialog from "react-bootstrap"
import ModalHeader from "react-bootstrap"
import { ModalBody } from "react-bootstrap"
import { useState } from "react"

const TableRow = ({student, submitAbsence})=>{
    const [absentSubmission, setAbsentSubmission] = useState({})

    const onSubmit = (e)=>{
        e.preventDefault()
        const date = new Date()
        absentSubmission.date = date
        submitAbsence(absentSubmission, student.id)
        setAbsentSubmission({})
        e.target.reset()
    }

    const onChangeAbsentRadio = (e)=>{
        const newStatus = absentSubmission
        newStatus.absenceType = e.target.id
        setAbsentSubmission(newStatus)

    }
    const onChangeAbsent = (e)=>{
        const newStatus = absentSubmission
        newStatus.notes = e.target.value
        setAbsentSubmission(newStatus)
    }

    return(
        <>
        <tr>
            <td scope="col">{student.firstName}</td>
            <td scope="col">{student.lastName}</td>
            <td scope="col">{student.studentYear}</td>
            <td scope="col">{student.absences.length}</td>
            <td scope="col"><Button data-bs-toggle="modal" data-bs-target={`#${student.id}`}><i class="bi bi-plus-lg"></i></Button></td>
            <td scope="col">{student.demerits.length}</td>
            <td scope="col"><Button><i class="bi bi-plus-lg"></i></Button></td>
            <td scope="col"><Button><i class="bi bi-tools"></i></Button></td>
        </tr>

            <div class="modal fade" id={student.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{student.firstName} {student.lastName}</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <form name="absenceform" onSubmit={onSubmit}>
                <div class="modal-body">
                            <label class="form-check-label" for="flexCheckDefault">Absence Reason:</label>
                        <div class="form-check">
                            <label class="form-check-label" htmlFor="Late">Late</label>
                            <input onChange={onChangeAbsentRadio} type="radio" id="Late" name="checked" required="required" oninvalid="alert('Hey, you missed something on modal!')"/>
                        </div>
                        <div class="form-check"></div>
                            <label class="form-check-label" htmlFor="No Show">No Show</label>
                            <input onChange={onChangeAbsentRadio} type="radio" id="No Show" name="checked"/>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label" htmlFor="Medical">Medical</label>
                            <input onChange={onChangeAbsentRadio} type="radio" id="Medical" name="checked"/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="notes-text" class="col-form-label">Notes:</label>
                            <textarea onChange={onChangeAbsent} class="form-control" id="notes-text"></textarea>
                        </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type= "submit" class="btn btn-primary"data-bs-dismiss="modal">Save changes</button>
                </div>
                    </form>
                </div>
            </div>
            </div>




        </>
    )
}
export default TableRow