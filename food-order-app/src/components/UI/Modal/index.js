import {ModalContainer} from './styles'
import {BackdropContainer} from './styles'
import ReactDOM from 'react-dom'

function Backdrop(props){
  return(
    <BackdropContainer onClick={props.onClose}/>
  )
}

function ModalOverlay(props){
  return(
    <ModalContainer>
      <div>{props.children}</div>
    </ModalContainer>
  );
}

const portalElement = document.getElementById('overlays')

export default function Modal(props){
  return(
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>
  );
};