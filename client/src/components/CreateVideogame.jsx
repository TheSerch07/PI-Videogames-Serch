import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postVideogame, fetchGenres } from "../store/actions";
import { useDispatch, useSelector } from "react-redux"

export default function CreateVideogame() {
    return (
        <h1>I'm route create</h1>
    )
}