import votesComplaint from '../services/Api/votesComplaint.httpClient';

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