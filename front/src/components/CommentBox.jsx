// import React, { useEffect, useState } from 'react';
// import {
//     Box,
//     Button,
//     TextField,
//     Typography,
//     Card,
//     CardContent,
//     CardActions,
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import Avatar from '@mui/material/Avatar';

// const CommentBox = () => {
//     const [comments, setComments] = useState([]);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [comment, setComment] = useState('');
//     const [editId, setEditId] = useState(null);

//     const fetchComments = async () => {
//         const response = await fetch('http://localhost:3000/comments');
//         const data = await response.json();
//         setComments(data.comments);
//     };

//     useEffect(() => {
//         fetchComments();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost:3000/comments', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name, email, comment }),
//         });
//         const data = await response.json();
//         setComments((prevComments) => [...prevComments, data.comment]);
//         resetForm();
//     };

//     const handleDelete = async (id) => {
//         await fetch(`http://localhost:3000/comments/${id}`, {
//             method: 'DELETE',
//         });
//         setComments((prevComments) => prevComments.filter((c) => c.id !== id));
//     };

//     const handleEdit = (id, commentText) => {
//         setEditId(id);
//         setComment(commentText);
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         const response = await fetch(
//             `http://localhost:3000/comments/${editId}`,
//             {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ comment }),
//             }
//         );
//         const data = await response.json();
//         setComments((prevComments) =>
//             prevComments.map((c) => (c.id === editId ? data.comment : c))
//         );
//         resetForm();
//     };

//     const resetForm = () => {
//         setName('');
//         setEmail('');
//         setComment('');
//         setEditId(null);
//     };

//     return (
//         <Box
//             sx={{
//                 maxWidth: 600,
//                 margin: '0 auto',
//                 padding: 2,
//                 border: '2px solid #ccc',
//                 borderRadius: '8px',
//             }}
//         >
//             <Typography variant="h4" gutterBottom>
//                 Leave comments
//             </Typography>
//             <form onSubmit={editId ? handleUpdate : handleSubmit}>
//                 <TextField
//                     fullWidth
//                     label="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     margin="normal"
//                 />
//                 <TextField
//                     fullWidth
//                     label="Email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     margin="normal"
//                 />
//                 <TextField
//                     fullWidth
//                     label="Comment"
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     required
//                     margin="normal"
//                 />
//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 2 }}
//                     size="small"
//                 >
//                     {editId ? 'Update Comment' : 'Add Comment'}
//                 </Button>
//             </form>

//             <Box mt={4}>
//                 {Array.isArray(comments) && comments.length > 0 ? (
//                     comments.map((c) => (
//                         <Card key={c.id} variant="outlined" sx={{ mb: 2 }}>
//                             <CardContent>
//                                 <Box display="flex" alignItems="center">
//                                     <Avatar
//                                         alt={c.name}
//                                         src={c.avatarUrl}
//                                         sx={{ width: 30, height: 30, mr: 2 }}
//                                     />
//                                     <Typography variant="h6">
//                                         {c.name}
//                                     </Typography>
//                                 </Box>
//                                 <Typography variant="body2">
//                                     {c.comment}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button
//                                     onClick={() => handleEdit(c.id, c.comment)}
//                                     startIcon={<EditIcon />}
//                                     size="small"
//                                 >
//                                     Edit
//                                 </Button>
//                                 <Button
//                                     onClick={() => handleDelete(c.id)}
//                                     color="error"
//                                     startIcon={<DeleteIcon />}
//                                     size="small"
//                                 >
//                                     Delete
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     ))
//                 ) : (
//                     <Typography>No comments yet.</Typography>
//                 )}
//             </Box>
//         </Box>
//     );
// };

// export default CommentBox;

// import React, { useEffect, useState } from 'react';
// import {
//     Box,
//     Button,
//     TextField,
//     Typography,
//     Card,
//     CardContent,
//     CardActions,
//     Avatar,
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// const CommentBox = () => {
//     const [comments, setComments] = useState([]);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [comment, setComment] = useState('');
//     const [editId, setEditId] = useState(null);

//     const fetchComments = async () => {
//         const response = await fetch('http://localhost:3000/comments');
//         const data = await response.json();
//         setComments(data.comments);
//     };

//     useEffect(() => {
//         fetchComments();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost:3000/comments', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name, email, comment }),
//         });
//         const data = await response.json();
//         setComments((prevComments) => [...prevComments, data.comment]);
//         resetForm();
//     };

//     const handleDelete = async (id) => {
//         await fetch(`http://localhost:3000/comments/${id}`, {
//             method: 'DELETE',
//         });
//         setComments((prevComments) => prevComments.filter((c) => c.id !== id));
//     };

//     const handleEdit = (id, commentText) => {
//         setEditId(id);
//         setComment(commentText);
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         const response = await fetch(
//             `http://localhost:3000/comments/${editId}`,
//             {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ comment }),
//             }
//         );
//         const data = await response.json();
//         setComments((prevComments) =>
//             prevComments.map((c) => (c.id === editId ? data.comment : c))
//         );
//         resetForm();
//     };

//     const resetForm = () => {
//         setName('');
//         setEmail('');
//         setComment('');
//         setEditId(null);
//     };

//     // Función para generar un URL de avatar aleatorio
//     const getRandomAvatar = (name) => {
//         const seed = name || Math.random().toString(36).substring(7); // Usar el nombre o un valor aleatorio como semilla
//         return `https://api.dicebear.com/6.x/avataaars/svg?seed=${seed}`;
//     };

//     return (
//         <Box
//             sx={{
//                 maxWidth: 600,
//                 margin: '0 auto',
//                 padding: 2,
//                 border: '2px solid #ccc',
//                 borderRadius: '8px',
//             }}
//         >
//             <Typography variant="h4" gutterBottom>
//                 Leave comments
//             </Typography>
//             <form onSubmit={editId ? handleUpdate : handleSubmit}>
//                 <TextField
//                     fullWidth
//                     label="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     margin="normal"
//                 />
//                 <TextField
//                     fullWidth
//                     label="Email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     margin="normal"
//                 />
//                 <TextField
//                     fullWidth
//                     label="Comment"
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     required
//                     margin="normal"
//                 />
//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 2 }}
//                     size="small"
//                 >
//                     {editId ? 'Update Comment' : 'Add Comment'}
//                 </Button>
//             </form>

//             <Box mt={4}>
//                 {Array.isArray(comments) && comments.length > 0 ? (
//                     comments.map((c) => (
//                         <Card key={c.id} variant="outlined" sx={{ mb: 2 }}>
//                             <CardContent>
//                                 <Box display="flex" alignItems="center">
//                                     <Avatar
//                                         alt={c.name}
//                                         src={getRandomAvatar(c.name)} // Usar la función para obtener un avatar
//                                         sx={{ width: 40, height: 40, mr: 2 }}
//                                     />
//                                     <Box>
//                                         <Typography variant="h6">
//                                             {c.name}
//                                         </Typography>
//                                         <Typography
//                                             variant="body2"
//                                             sx={{
//                                                 fontWeight: 'bold',
//                                                 fontSize: '0.8rem',
//                                             }} // Negrita y tamaño pequeño
//                                         >
//                                             {c.email}
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                                 <Typography
//                                     variant="body2"
//                                     sx={{
//                                         fontFamily: 'Arial, sans-serif',
//                                         fontSize: '1rem',
//                                     }} // Cambiar la tipografía
//                                 >
//                                     {c.comment}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button
//                                     onClick={() => handleEdit(c.id, c.comment)}
//                                     startIcon={<EditIcon />}
//                                     size="small"
//                                 >
//                                     Edit
//                                 </Button>
//                                 <Button
//                                     onClick={() => handleDelete(c.id)}
//                                     color="error"
//                                     startIcon={<DeleteIcon />}
//                                     size="small"
//                                 >
//                                     Delete
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     ))
//                 ) : (
//                     <Typography>No comments yet.</Typography>
//                 )}
//             </Box>
//         </Box>
//     );
// };

// export default CommentBox;

import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Card,
    CardContent,
    CardActions,
    Avatar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CommentBox = () => {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [editId, setEditId] = useState(null);

    const fetchComments = async () => {
        const response = await fetch('http://localhost:3000/comments');
        const data = await response.json();
        setComments(data.comments);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, comment }),
        });
        const data = await response.json();
        setComments((prevComments) => [...prevComments, data.comment]);
        resetForm();
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:3000/comments/${id}`, {
            method: 'DELETE',
        });
        setComments((prevComments) => prevComments.filter((c) => c.id !== id));
    };

    const handleEdit = (id, commentText) => {
        setEditId(id);
        setComment(commentText);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `http://localhost:3000/comments/${editId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment, name, email }),
            }
        );
        const data = await response.json();
        console.log('AAAAAAAAAAAAAAAAAAA', data);
        setComments((prevComments) =>
            prevComments.map((c) => (c.id === editId ? data : c))
        );
        resetForm();
        console.log(
            'NUEVOCOMENTSSSSSSSSSSSSSSS',
            comments.map((c) => (c.id === editId ? data : c))
        );
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setComment('');
        setEditId(null);
    };

    return (
        <Box
            sx={{
                maxWidth: 600,
                margin: '0 auto',
                padding: 2,
                border: '2px solid #ccc',
                borderRadius: '8px',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Leave comments
            </Typography>
            <form onSubmit={editId ? handleUpdate : handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    size="small"
                >
                    {editId ? 'Update Comment' : 'Add Comment'}
                </Button>
            </form>

            <Box mt={4}>
                {Array.isArray(comments) && comments.length > 0 ? (
                    comments.map((c) => (
                        <Card key={c.id} variant="outlined" sx={{ mb: 2 }}>
                            <CardContent
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                <Avatar
                                    alt={c.name}
                                    src={`https://avatars.dicebear.com/api/human/${c.id}.svg`}
                                    sx={{ width: 40, height: 40, mr: 2 }}
                                />
                                <Box>
                                    <Typography variant="h6">
                                        {c.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        fontWeight="bold"
                                    >
                                        {c.email}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontFamily: 'Arial, sans-serif' }}
                                    >
                                        {c.comment}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button
                                    onClick={() => handleEdit(c.id, c.comment)}
                                    startIcon={<EditIcon />}
                                    size="small"
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => handleDelete(c.id)}
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    size="small"
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                ) : (
                    <Typography>No comments yet.</Typography>
                )}
            </Box>
        </Box>
    );
};

export default CommentBox;
