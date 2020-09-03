import React from 'react';

export const svgs = {
	exit: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>,

	create: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>,

	'open room': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="hsl(140 80% 50%)" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>,

	'private room': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="hsl(60 80% 50%)" width="18px" height="18px"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>,

	addPhoto: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>,

	conversationImage: <svg height="512" viewBox="0 0 58 57" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fillRule="evenodd"><g id="046---Tying-Chats"><path id="Shape" d="m40 21h14c2.209139 0 4 1.790861 4 4v20c0 2.209139-1.790861 4-4 4h-3l.69 6.17c.0479682.4247282-.1793133.8329868-.5655965 1.015963-.3862831.1829763-.8461548.1002113-1.1444035-.205963l-6.98-6.98h-21c-2.209139 0-4-1.790861-4-4v-17z" fill="#3b97d3" fillRule="nonzero"/><path id="Shape" d="m8 4h-4v4" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><g fillRule="nonzero"><path id="Shape" d="m40 4v20c0 2.209139-1.790861 4-4 4h-21l-6.98 6.98c-.29824873.3061743-.75812038.3889393-1.14440355.205963-.38628317-.1829762-.61356468-.5912348-.56559645-1.015963l.69-6.17h-3c-2.209139 0-4-1.790861-4-4v-20c0-2.209139 1.790861-4 4-4h32c2.209139 0 4 1.790861 4 4z" fill="#ff5364"/><path id="Shape" d="m54 46h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h3v-3c0-.5522847.4477153-1 1-1s1 .4477153 1 1v4c0 .5522847-.4477153 1-1 1z" fill="#fff"/><circle id="Oval" cx="9" cy="14" fill="#fff" r="3"/><circle id="Oval" cx="31" cy="14" fill="#fff" r="3"/><circle id="Oval" cx="20" cy="14" fill="#fff" r="3"/><circle id="Oval" cx="27" cy="35" fill="#fff" r="3"/><circle id="Oval" cx="49" cy="35" fill="#fff" r="3"/><circle id="Oval" cx="38" cy="35" fill="#fff" r="3"/></g></g></g></svg>,

	clear: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>,

	arrowRight: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>,

	login: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/></g></svg>,
}

export const timeOptions = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
};