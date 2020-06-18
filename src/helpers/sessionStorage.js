import votesComplaint from '../services/Api/votesComplaint.httpClient';
import votesComment from '../services/Api/votesComment.httpClient';

export const addSessionStorage = async (user) => {
    if (sessionStorage.getItem('voteComplaint') === null) {
        const votes = await votesComplaint.getUserId(user);
        const array =  Object.values(votes.data).map(vote => vote.ID_COMPLAINT)
        sessionStorage.setItem('voteComplaint', JSON.stringify(array));
    }
}

export const newVoteSessionStorage = (idComplaint, user )=> {
    const actualVotes= JSON.parse(sessionStorage.getItem('voteComplaint')) || [];
    const newVotes = [...actualVotes, idComplaint];
    sessionStorage.setItem('voteComplaint', JSON.stringify(newVotes));
    const vote = {	"id_u": user.uid,
	                "id_c": idComplaint}
    votesComplaint.post(vote)
}

export const isExistVote = id =>{
    const actualVotes=  JSON.parse(sessionStorage.getItem('voteComplaint')) || [];
    const res =  actualVotes.some( idS => idS === id);
    return res;
}

////////////
export const addSessionStorageComment = async (user) => {
    if (sessionStorage.getItem('voteComment') === null) {
        const votes = await votesComment.getUserId(user);
        const array =  Object.values(votes.data).map(vote => vote.ID_C)
        sessionStorage.setItem('voteComment', JSON.stringify(array));
    }
}

export const newVoteCommentSessionStorage = (idComment, user )=> {
    const actualVotes= JSON.parse(sessionStorage.getItem('voteComment')) || [];
    const newVotes = [...actualVotes, idComment];
    sessionStorage.setItem('voteComment', JSON.stringify(newVotes));
    const vote = {	"id_u": user.uid,
	                "id_c": idComment}
    votesComment.post(vote)
}

export const isExistVoteComment = id =>{
    const actualVotes=  JSON.parse(sessionStorage.getItem('voteComment')) || [];
    const res =  actualVotes.some( idS => idS === id);
    return res;
}