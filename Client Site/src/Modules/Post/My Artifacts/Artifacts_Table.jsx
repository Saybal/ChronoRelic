import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Tooltip,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../../../Shared/Hooks/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import AxiosBaseToken from "../../../Shared/Hooks/AxiosBaseToken";
import No_Artifact from "./No_Artifact";

const Artifacts_Table = () => {
  const { user, loading } = useContext(AuthContext);
  const instance = AxiosBaseToken();
  const [myartifacts, setArtifacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || loading) return;

    instance
      .get(`/my-artifacts/${user?.email}`)
      .then((res) => {
        setArtifacts(res.data);
      })
      .catch((error) => {
        Swal.fire({
          text: error.message,
          icon: "error",
          confirmButtonColor: "#800020",
          confirmButtonText: "Okay",
        });
      });
  }, [user, loading]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#800020",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://artifacts-tracker-sable.vercel.app/my-artifacts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                text: "Artifact deleted successfully.",
                icon: "success",
                confirmButtonColor: "#800020",
                confirmButtonText: "Okay",
              });
              setArtifacts(
                myartifacts.filter((artifact) => artifact._id !== id)
              );
              navigate("/all-artifacts");
            }
          })
          .catch((error) => {
            Swal.fire({
              text: error.message,
              icon: "error",
              confirmButtonColor: "#800020",
              confirmButtonText: "Okay",
            });
          });
      }
    });
  };

  return (
    <div>
      {myartifacts.length === 0 ? (
        <No_Artifact />
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              overflowX: { xs: "auto", sm: "auto" },
              px: { xs: 1, sm: 3, md: 5 },
              mt: { xs: 2, sm: 4 },
              bgcolor: "#F5F2EB",
            }}
          >
            <TableContainer
              component={Paper}
              sx={{
                maxWidth: "100%",
                mx: "auto",
                bgcolor: "#F5F2EB",
                boxShadow: "0 4px 8px rgba(139, 94, 60, 0.3)",
                borderRadius: 2,
                minWidth: { xs: 300, sm: 600, md: 800 },
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontWeight: "bold",
                  color: "#2D2D2D",
                  padding: { xs: "12px 16px", sm: "16px 24px" },
                  borderBottom: "2px solid #8B5E3C",
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                }}
              >
                My Artifacts
              </Typography>

              <Table sx={{ minWidth: 650 }} aria-label="my artifacts table">
                <TableHead sx={{ backgroundColor: "#003153" }}>
                  <TableRow>
                    {["Title", "Description", "Date Added", "Actions"].map(
                      (head) => (
                        <TableCell
                          key={head}
                          align={
                            head === "Actions" || head === "Date Added"
                              ? "center"
                              : "left"
                          }
                          sx={{
                            color: "#F8F4E3",
                            fontFamily: "Nunito",
                            fontWeight: "bold",
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                          }}
                        >
                          {head}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {myartifacts.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        align="center"
                        sx={{ py: 6, fontStyle: "italic", color: "#8B5E3C" }}
                      >
                        You haven’t added any artifacts yet.
                      </TableCell>
                    </TableRow>
                  ) : (
                    myartifacts.map((artifact) => (
                      <TableRow
                        key={artifact._id}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#EFE2C5",
                          },
                          cursor: "default",
                        }}
                      >
                        <TableCell
                          sx={{
                            fontFamily: "Nunito",
                            color: "#4B3E2A",
                            fontWeight: 600,
                            maxWidth: { xs: 120, sm: 180 },
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {artifact["Artifact-Name"]}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Nunito",
                            color: "#4B3E2A",
                            maxWidth: 300,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          title={artifact["Short-Description"]}
                        >
                          {artifact["Short-Description"]}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontFamily: "Nunito",
                            color: "#6B5E4A",
                            fontStyle: "italic",
                            fontSize: { xs: "0.75rem", sm: "0.9rem" },
                          }}
                        >
                          {artifact["Posted-Date"]}
                        </TableCell>
                        <TableCell align="center">
                          <Tooltip title="Update Artifact">
                            <IconButton
                              aria-label="update"
                              sx={{ color: "#7F1734" }}
                            >
                              <Link to={`/update/${artifact._id}`}>
                                <EditIcon />
                              </Link>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete Artifact">
                            <IconButton
                              aria-label="delete"
                              sx={{ color: "#7F1734" }}
                              onClick={() => handleDelete(artifact._id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}
    </div>
  );
};

export default Artifacts_Table;
