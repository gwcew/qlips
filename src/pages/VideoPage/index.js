import React, { useState } from 'react';
import { Grid, Box, Container, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from 'components/VideoPlayer';
import { FormatListNumbered, Info, ArrowForwardIos } from '@material-ui/icons';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Comments from "components/CommentBlock";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 190px)',
      margin: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 105px)',
      marginLeft: 'auto',
      marginRight: '15px',
    },
  },
  root: {},
  sideBlock: {
    transition: '0.4s',
    overflow: 'hidden',
    height: '80vh',
    color: theme.palette.text.main,
    backgroundColor: theme.palette.sidePanels.main,
    borderRadius: '10px',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  leftBlock: {
    textAlign: 'right',
  },
  rightBlock: {
    textAlign: 'left',
  },
  mainBlock: {
    backgroundColor: theme.palette.background.default,
  },
  middleAligment: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  leftAlign: {
    textAlign: "left",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  comments: {
    marginTop: '30px',
  },
  videoWrap: {
    transition: '0.4s',
  },
  linkWrap: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
  }
}));

function VideoPage(props) {
  const classes = useStyles();
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);

  const videoData = props.videocontent.content[props.match.params.id];
  const commentData = props.commentscontent.commentsStorage.filter(element => element.id_to_video_page === Number(props.match.params.id));

  const leftSidebarClick = () => {
    if(leftSidebar){
      setLeftSidebar(false);
    } else {
      setRightSidebar( false);
      setLeftSidebar(true);
    }
  }

  const rightSidebarClick = () => {
    if(rightSidebar){
      setRightSidebar(false);
    } else {
      setRightSidebar(true);
      setLeftSidebar(false);
    }
  }

  return (
    <Grid item className={[props.className, classes.wrapper]}>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={0} md={(leftSidebar ? 5 : rightSidebar ? 1 : 2)} className={[classes.sideBlock, classes.leftBlock].join(' ')}>
          <a onClick={leftSidebarClick} className={classes.linkWrap}>
            <Box>
              <Grid container className={classes.rowReverse}>
                <Grid item className={classes.middleAligment}>
                  {leftSidebar &&
                    <ArrowForwardIos style={{ color: '#fff', transform: 'scaleX(-1)' }} fontSize="large" />
                  }
                  {!leftSidebar &&
                    <FormatListNumbered style={{ color: '#fff' }} fontSize="large" />
                  }
                </Grid>
                {leftSidebar &&
                <Grid item xs={10} className={classes.leftAlign} style={{ marginRight: '10px' }}>
                  <h3>Оглавление</h3>
                  <p>
                    Вступление
                    Вакцина
                    Испытания
                    Заражения
                    Терапия
                    Заключение
                  </p>
                </Grid>
                }
              </Grid>
            </Box>
          </a>
        </Grid>
        <Grid className={classes.videoWrap} item xs={12} md={(leftSidebar || rightSidebar ? 6 : 8)}>
          <VideoPlayer videoData={videoData} />
        </Grid>
        <Grid item xs={0} md={(rightSidebar ? 5 : leftSidebar ? 1 : 2)} className={[classes.sideBlock, classes.rightBlock].join(' ')}>
          <a onClick={rightSidebarClick} className={classes.linkWrap}>
            <Box>
              <Grid container>
                <Grid item className={classes.middleAligment}>
                  {rightSidebar &&
                    <ArrowForwardIos style={{ color: '#fff' }} fontSize="large" />
                  }
                  {!rightSidebar &&
                    <Info style={{ color: '#fff' }} fontSize="large" />
                  }
                </Grid>
                {rightSidebar &&
                <Grid item xs={10} style={{ marginLeft: '10px' }}>
                  <h3>Описание</h3>
                  <p>
                      <div style={{wordWrap: 'normal', whiteSpace: 'pre'}}>
                      Говоря об отравлениях, нельзя не вспомнить о газах. Загадка про этот газ могла
бы начинаться со слов «не лает, не кусает», потому что он не имеет вкуса и запаха
и никак не предупреждает о своем присутствии, а потому может накапливаться в
закрытых помещениях в больших концентрациях, доводя до гибели тех, кто имел
неосторожность не позаботиться о своей безопасности вблизи источника этого
газа. 
Итак, герой нашего доклада — оксид углерода (II), а редактор замечательного
сообщества «Девятый вызов» и врач скорой помощи Кремков Андрей
Владимирович расскажет о том, как же помочь при отравлении угарным газом на
догоспитальном этапе.
Мероприятие: Токсикология и доказательная медицина, 10 февраля 2018 года
                      </div>
                  </p>
                </Grid>
                }
              </Grid>
            </Box>
          </a>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.comments}>
        <Comments commentData={commentData[0]} />
      </Grid>
    </Grid>
  );
}

VideoPage.propTypes = {
  className: PropTypes.string,
  videocontent: PropTypes.object,
  commentscontent: PropTypes.object, 
  match: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    videocontent: state.gridvideo,
    commentscontent: state.commentHandler,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
