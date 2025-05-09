import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useGlobalContext } from "./Hooks/GlobalContext";
import Line from "./Line";
import Circle from "./Circle";
function WinningModal() {
  const [showModal, setShowModal] = useState(false);
  const { winner } = useGlobalContext()?.data;
  useEffect(() => {
    if (winner === "x" || winner === "o" || winner === "draw") {
      setShowModal(true);

    }
  }, [winner]);
  return (
    <div>
      <MDBModal
        open={showModal}
        tabIndex="-1"
        onClick={() => setShowModal(false)}
      >
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                {winner !== "draw" ? (
                  <>Congratulation for winning</>
                ) : (
                  <>Match is Draw</>
                )}
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setShowModal(false)}
              />
            </MDBModalHeader>
            <MDBModalBody>
              <motion.svg
                width="100%"
                height="100%"
                viewBox="0,0,100,100"
                animate="visible"
                style={{
                  width: "100%",
                  maxWidth: "120px",
                  aspectRatio: "1 / 1",
                  margin: "5px",
                }}
              >
                {winner === "x" && <Line />}
                {winner === "o" && <Circle />}
                {winner === "draw" && (
                  <>
                    <Line />
                    <Circle />
                  </>
                )}
              </motion.svg>
              <h1>{winner}</h1>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default WinningModal;
